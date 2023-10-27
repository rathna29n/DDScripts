import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

  testMatch : ["MainBLS/DRS_Place_Order.ts"],
  workers:5,
    use:{

        headless :false,

        screenshot: "on",
        viewport:{width:1280,height:800},
        trace: 'on',

       // video: "on"

    },
    timeout: 15 * 60 * 1000,

    retries: 0,

    reporter: [["dot"], ["json",{

      outputFile: "jsonReports/testresult.json"

    }], ["html", {

        open: "always"

    }]],
    
   
  };
    export default config;