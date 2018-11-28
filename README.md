**Text To Array, an Alfred Workflow & NodeJS script to convert carriage-return delimited lines into an array**

Pre-requisites:

* OS X
* Alfred (powerpack may be required for Alfred Workflows)
* NodeJS

To install:

* Import the .alfredworkflow.  Change the path of the nodejs script in the "Terminal command" function to wherever you placed textToArray.js

To use:

* Select carriage-return delimited text and copy it into your clipboard
* Press the hotkey
* Paste your array!


 
*This script will convert this:*

```
Name1
Name2
Name3
Name4
```

*Into this:*

```
["Name1","Name2","Name3","Name4"]
```
