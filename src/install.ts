import type defaultConfig from "@nuxthq/ui/dist/runtime/app.config";
import { type App } from "vue";

export interface VueUiOptions {
  config: typeof defaultConfig;
}

export default function install(app: App, options: VueUiOptions) {
  // Provide the config to the app
  app.provide("config", options.config);
}
