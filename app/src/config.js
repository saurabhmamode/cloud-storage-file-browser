// Duplicate and remove the underscore from this file and add your google oauth ID and API endpoint below before building

export default {
  googleClientId: '998070343124-78k08oucime6qf4od5id8cq1nb8onvp1.apps.googleusercontent.com', // The OAUTH client ID for your file browser
  APIEndpoint: 'https://us-central1-infra-devops-experiments.cloudfunctions.net/gcs-bucket-ui', // The URL to the cloud function
  CDN_URL: 'https://yellowstone.ml/', // The base URL to your CDN or bucket. This might be a custom subdomain or https://bucket-name.storage.googleapis.com/ if you don't have a CDN.
  BucketUrl: 'https://console.cloud.google.com/storage/browser/transcribe-poc-saurabh/', // This is used to bypass the cache on your CDN. ONLY replace the YOUR-BUCKET-NAME part with the name of your bucket.
  appName: 'CDN File Manager' // The name that appears at the top of the app menu.
}
