import { Config } from '@stencil/core';
import { angularOutputTarget as angular } from '@stencil/angular-output-target';


export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    angular({
      componentCorePackage: `stencil-library`,
      directivesProxyFile: `../component-library/src/lib/stencil-generated/components.ts`
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
