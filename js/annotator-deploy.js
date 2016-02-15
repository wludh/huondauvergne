$('body').annotator()
             .annotator('setupPlugins');

// var content = $('body').annotator();
//     content.annotator('setupPlugins', {}, {
//     	Store: {
//       // The endpoint of the store on your server.
//      	// prefix: 'https://annotateit.org/api/search?user=walshb',
  	
//       // Attach the uri of the current page to all annotations to allow search.
//       	// annotationData: {
//        //  	'uri': 'https://huon-staging.herokuapp.com/bibliography.html'
//       	// }

//       // This will perform a "search" action when the plugin loads. Will
//       // request the last 20 annotations for the current url.
//       // eg. /store/endpoint/search?limit=20&uri=http://this/document/only
//       // loadFromSearch: {
//       // 	'limit': 0,
//       //   'all_fields': 1,
//       //   'uri': 'https://huon-staging.herokuapp.com/bibliography.html'
//       // }
//     }
// }
// );

// "http://annotateit.org/api/search?user=walshb" will return all the 
// annotations by a user. but then how do i load that into the annotator?


// $(document).ready(function() {
//   // Call Annotator JS
//   var content = $('body').annotator();
//   // +++ Auth Plugin +++
//   content.annotator('addPlugin', 'Auth', {
//     // The URL to request the token from. Defaults to /auth/token
//     tokenUrl: '/auth/token',
//     // If this is present it will not be requested from the server above. Defaults to null.
//     token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb25zdW1lcktleSI6ImE1MjI3NDZjOWUyNjRhOGJhMzdiNzAxOGI5MTIyZGU5IiwiaXNzdWVkQXQiOiIyMDE2LTAyLTEyVDE2OjU2OjAzWiIsInR0bCI6ODY0MDAsInVzZXJJZCI6MX0.kkdKkjYNUrcYjusoVNF6zSuCMu3aE4K9XYlbDfMLJHw',
//     // Whether to fetch the token when the plugin is loaded. Defaults to true
//     autoFetch: true
//   });
//   // +++ Store +++
//   content.annotator('addPlugin', 'Store', {
//     // This is the API endpoint. If the server supports Cross Origin Resource
//     // Sharing (CORS) a full URL can be used here. Defaults to /store. The
//     // trailing slash should be omitted.
//     prefix: 'http://annotateit.org/api',
//     // Custom meta data that will be attached to every annotation that is sent
//     // to the server. This will override previous values. E.g. attach the uri of the
//     // current page to all annotations to allow search.
//     annotationData: {
//       'uri': 'http://localhost:8000/bibliography'
//     },
//     // An object literal containing query string parameters to query the store.
//     // If loadFromSearch is set, then we load the first batch of annotations
//     // from the ‘search’ URL as set in options.urls instead of the registry path
//     // ‘prefix/read’. Defaults to false.
//     loadFromSearch: {
//       'limit': 20,
//       'all_fields': 1,
//       'uri': 'http://localhost:8000/bibliography'
//     },
//     // The server URLs for each available action (excluding prefix). These URLs
//     // can point anywhere but must respond to the appropriate HTTP method. The
//     // :id token can be used anywhere in the URL and will be replaced with the
//     // annotation id.
//     // Methods for actions are as follows:
//     // create:  POST
//     // update:  PUT
//     // destroy: DELETE
//     // search:  GET
//     urls: {
//       // These are the default URLs.
//       create:  '/annotations',
//       update:  '/annotations/:id',
//       destroy: '/annotations/:id',
//       search:  '/search'
//     },
//     // If true will display the "anyone can view this annotation" checkbox.
//     showViewPermissionsCheckbox: true,
//     // If true will display the "anyone can edit this annotation" checkbox.
//     showEditPermissionsCheckbox: true
//   });
// });