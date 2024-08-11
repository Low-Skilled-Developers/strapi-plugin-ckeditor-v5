import { Plugin, FileRepository, FileLoader, UploadResponse } from 'ckeditor5'
import { PluginDependencies } from '@ckeditor/ckeditor5-core/src/plugin'
import { SimpleUploadConfig } from '@ckeditor/ckeditor5-upload/src/uploadconfig'

/**
 * Similar to Simple upload adapter but customized for Strapi.
 * Inspired by https://github.com/ckeditor/ckeditor5/blob/master/packages/ckeditor5-upload/src/adapters/simpleuploadadapter.js
 * Taken from "https://github.com/nshenderov/strapi-plugin-ckeditor/blob/master/admin/src/components/Input/CKEditor/plugins/StrapiUploadAdapter.js"
 */
export default class StrapiUploadAdapter extends Plugin {
  static readonly pluginName = 'strapiUploadAdapter'
  static readonly requires: PluginDependencies = [FileRepository]

  /**
   * @inheritdoc
   */
  public init() {
    const options = this.editor.config.get(StrapiUploadAdapter.pluginName) as SimpleUploadConfig | undefined
    if (!options) {
      return
    }

    if (!options.uploadUrl) {
      console.warn('strapi-upload-adapter-missing-uploadUrl: Missing the "uploadUrl" property in the "strapiUploadAdapter" editor configuration.')

      return;
    }

    this.editor.plugins.get(FileRepository).createUploadAdapter = (loader: FileLoader) => new Adapter(loader, options)
  }
}


class Adapter {
  private xhr: XMLHttpRequest

  constructor(private readonly loader: FileLoader, private readonly options: Partial<SimpleUploadConfig> = {}) {}

  /**
   * Starts the upload process.
   * TODO: rewrite with fetch
   */
  public async upload(): Promise<UploadResponse | null> {
    const file = await this.loader.file

    return new Promise((resolve, reject) => {
      this.initRequest();
      this.initListeners(resolve, reject, file);
      this.sendRequest(file);
    })
  }

  public abort() {
    if (!this.xhr) {
      return
    }

    this.xhr.abort();
  }

  /**
   * Initializes the `XMLHttpRequest` object using the URL specified as
   *  `strapiUpload.uploadUrl` in the editor's configuration.
   *  @deprecated
   */
  private initRequest() {
    this.xhr.open("POST", this.options.uploadUrl, true);
    this.xhr.responseType = "json";
  }

  /**
   * Initializes XMLHttpRequest listeners
   * @deprecated
   */
  private initListeners(resolve: Function, reject: Function, file: File) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = `Couldn't upload file: ${file.name}.`;

    xhr.addEventListener("error", () => reject(genericErrorText));
    xhr.addEventListener("abort", () => reject('ABORTED'));
    xhr.addEventListener("load", () => {
      const response = xhr.response;

      // @ts-expect-error
      if (!Array.isArray(response) || response.error || response.length !== 1) {
        return reject(
          response && response.error && response.error.message
            ? response.error.message
            : genericErrorText
        );
      }

      // @ts-expect-error
      const { backendUrl, responsive } = this.options;
      const { name, url, alternativeText, formats, provider } = response[0];
      const defaultUrl = provider !== "local" ? url : backendUrl + url;

      if (formats && responsive) {
        let urls = { default: defaultUrl };
        let keys = Object.keys(formats).sort(
          (a, b) => formats[a].width - formats[b].width
        );
        keys.map((k) => (urls[formats[k].width] = provider !== 'local' ? url : backendUrl + formats[k].url));
        resolve({ alt: alternativeText || name, urls: urls });
      } else {
        resolve(
          url
            ? {
              alt: alternativeText || name,
              urls: { default: defaultUrl },
            }
            : null
        );
      }
    });

    // Upload progress when it is supported.
    /* istanbul ignore else */
    if (xhr.upload) {
      xhr.upload.addEventListener("progress", (evt) => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  /**
   * Prepares the data and sends the request.
   * @deprecated
   */
  private sendRequest(file: File) {
    const headers = this.options.headers || {};
    const withCredentials = this.options.withCredentials || false;

    for (const headerName of Object.keys(headers)) {
      this.xhr.setRequestHeader(headerName, headers[headerName]);
    }

    this.xhr.withCredentials = withCredentials;

    const data = new FormData();

    data.append("files", file);

    this.xhr.send(data);
  }
}

declare module '@ckeditor/ckeditor5-core' {
  interface PluginsMap {
    [StrapiUploadAdapter.pluginName]: StrapiUploadAdapter;
  }
}
