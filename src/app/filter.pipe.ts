import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items, searchTerm) {
    let filteredlist = [];

    if (searchTerm) {
      let newSearchterm=!isNaN(searchTerm)? searchTerm.toString():
      searchTerm.toString() .toUpperCase();
      let prop; 

      return items.filter(item=> {
        for(let key in item) {
         prop=isNaN(item[key]) ? item[key] .toString() .toUpperCase() :
         item[key].toString();

      if (prop.indexOf(newSearchterm) > -1) {
        filteredlist.push(item);
        return filteredlist;
      }   
        }
      })
      }
    else{
    return items;
    }
  }

}
