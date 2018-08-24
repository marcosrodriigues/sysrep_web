import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-default-table',
  templateUrl: './default-table.component.html',
  styleUrls: ['./default-table.component.css'],
  inputs: ['columns', 'data']
})
export class DefaultTableComponent implements OnInit {

  @Input() columns: any = [];
  //@Input() data: any = [];

  data: any[] = [  
    {  
      "data":{  
        "name":"Andrew",
        "gender":"Male"
      },
      "children":[
        {  
          "data":{  
            "name":"Andrewson",
            "gender":"Male"
          },
          "children":[  
            {  
              "data":{  
                "name":"Eric",
                "gender":"Male"
              }
            }                       
          ]
        }
      ]
    },
    {  
      "data":{  
        "name":"Andrew",
        "gender":"Male"
      },
      "children":[
        {  
          "data":{  
            "name":"Andrewson",
            "gender":"Male"
          },
          "children":[  
            {  
              "data":{  
                "name":"Eric",
                "gender":"Male"
              }
            }                       
          ]
        }
      ]
    },
    {  
      "data":{  
        "name":"Andrew",
        "gender":"Male"
      },
      "children":[
        {  
          "data":{  
            "name":"Andrewson",
            "gender":"Male"
          },
          "children":[  
            {  
              "data":{  
                "name":"Eric",
                "gender":"Male"
              }
            }                       
          ]
        }
      ]
    },
    {  
      "data":{  
        "name":"Andrew",
        "gender":"Male"
      },
      "children":[
        {  
          "data":{  
            "name":"Andrewson",
            "gender":"Male"
          },
          "children":[  
            {  
              "data":{  
                "name":"Eric",
                "gender":"Male"
              }
            }                       
          ]
        }
      ]
    },
    {  
      "data":{  
        "name":"Andrew",
        "gender":"Male"
      },
      "children":[
        {  
          "data":{  
            "name":"Andrewson",
            "gender":"Male"
          },
          "children":[  
            {  
              "data":{  
                "name":"Eric",
                "gender":"Male"
              }
            }                       
          ]
        }
      ]
    },
    {  
      "data":{  
        "name":"Andrew",
        "gender":"Male"
      },
      "children":[
        {  
          "data":{  
            "name":"Andrewson",
            "gender":"Male"
          },
          "children":[  
            {  
              "data":{  
                "name":"Marcos",
                "gender":"Male"
              }
            }                       
          ]
        }
      ]
    },
  ]


  constructor() { 
  }

  ngOnInit() {
   
  }
}
