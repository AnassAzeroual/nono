# NgCyptoStore

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.
to store data (string,object or array of abjects) in localstore or sessionstore with crypto-js package

## Imports

import { LocalstorageService,SessionstorageService } from 'ng-crypto-store';

> add to constructor LocalstorageService or SessionstorageService

constructor(private srv: LocalstorageService) { }

## usage

> setItem(name: string, data: any, secret?: any): Promise<void>


> SetData
```
// store array of objects
    this.srv.setItem('fruits',[{name:'orange',icons:'🍊'},{name:'fraise',icons:'🍓'},{name:'banane',icons:'🍌'}])
// store object
    this.srv.setItem('fruits',{name:'orange',icons:'🍊'})
// store strings
    this.srv.setItem('fruits',"fruits: orange,fraise,banane and ...")
```
> GetData sync
> for example this.srv.setItem('fruits',[{name:'orange',icons:'🍊'},{name:'fraise',icons:'🍓'},{name:'banane',icons:'🍌'}])
```
    console.log(this.srv.getItem('fruits')); //  [{…}, {…}, {…}]
```

> GetData async

> for example this.srv.setItem('fruits',[{name:'orange',icons:'🍊'},{name:'fraise',icons:'🍓'},{name:'banane',icons:'🍌'}])
```
    this.srv.awiatGetItem('fruits').then(res => {
      console.log(res);  // [{…}, {…}, {…}]
    })
```
