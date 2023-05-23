# Ring SDK Design 
## Overview
The Ring SDK is a Typescript wrapper for the [The One API](https://the-one-api.dev/).
It is designed to be a simple, easy to use, and intuitive wrapper for the API.  
Each endpoint in the API has a corresponding module in the SDK.  
Each module has a set of functions that correspond to the functions in the API.  
Each function in the SDK returns a Promise that resolves to the data returned by the API.  

## Architecture decision records
* ADR-0001 - Use Typescript to provide type safety and intellisense.
* ADR-0002 - Use native Fetch API that can be easily polyfilled for other platforms.
* ADR-0003 - Use a single client object factory to provide a simple interface to the API.
* ADR-0004 - Use modules to split logic into logical units corresponding to the API.
* ADR-0005 - Make modules easy to add and remove.
* ADR-0006 - Test core functionality of the SDK.
* ADR-0007 - Build for Javascript and Typescript.

