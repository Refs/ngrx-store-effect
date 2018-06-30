# router

* Perhaps the user is not authorized to navigate to the target component .
* May be the user must login first .
* Maybe you should fetch some data before you display the target component .
* You may want to save pending changes before  leaving a component .
* You may ask the user if it's OK to discard pending changes rather than save them .

A guard return value controls the router behavior. 

* If it return true , the navigation process continues.
* If it return false , the navigation stops and the user stays put.


