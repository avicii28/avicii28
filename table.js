  const array=[     
    {
    "id": "5c2286fb23e87be312d55d9a",
    "name": {
    "firstName": "Brooks",
    "lastName": "Stone"
    },
    "phone": "+7 (843) 431-2190",
    "about": "Qui aliquip esse occaecat voluptate cillum laborum do adipisicing ea. Lorem dolor pariatur exercitation et Lorem voluptate reprehenderit. Culpa nisi sunt laborum culpa eu et nulla aute aliqua commodo cupidatat culpa. Eu laboris dolor enim officia mollit labore proident proident tempor ex minim magna dolor. Ipsum cillum officia irure amet enim voluptate consequat deserunt laborum nulla excepteur pariatur voluptate incididunt. In excepteur adipisicing dolor ea occaecat elit. Irure dolor quis cillum minim voluptate.",
    "eyeColor": "blue"
    },
    {
    "id": "5c2286fb7f4c26c63eff1b66",
    "name": {
    "firstName": "Johnston",
    "lastName": "Tate"
    },
    "phone": "+7 (939) 409-2841",
    "about": "Eu ipsum est in exercitation voluptate occaecat fugiat fugiat ea elit ad veniam adipisicing ullamco. Laboris consectetur enim dolore amet exercitation sit non do reprehenderit non. Proident consequat anim non voluptate non culpa sit occaecat adipisicing. Reprehenderit dolor cillum laboris incididunt exercitation quis esse in ad ut voluptate commodo in. Exercitation veniam adipisicing irure ut qui nulla.",
    "eyeColor": "brown"
    },
    ]
    function onButtonClick() {
      var tds = document.getElementsByTagName('td');
      tds[0].innerHTML=array[0].id;
      tds[1].innerHTML=array[1].id;
      tds[2].innerHTML=array[0].name.firstName+" "+array[0].name.lastName;
      tds[3].innerHTML=array[1].name.firstName+" "+array[1].name.lastName;;
      tds[4].innerHTML=array[0].phone;
      tds[5].innerHTML=array[1].phone;
      tds[6].innerHTML=array[0].about;
      tds[7].innerHTML=array[1].about;
      tds[8].innerHTML=array[0].eyeColor;
      tds[9].innerHTML=array[1].eyeColor;
        }