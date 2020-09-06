
$(function() {
    // Click event of「.login-show」
    $("#login-show").click(function(){
      $("#login-modal").fadeIn();
    });
  

    // Click event of「.signup-show」
    $(".signup-show").click(function(){
        $("#signup-modal").fadeIn();
    });

    //Close modal for both login and signup events
    $(".close-modal").click(function(){
      $("#login-modal").fadeOut();
      $("#signup-modal").fadeOut();
    });

    //Memopad(save,clear,edit)
    //Life-save
    $("#lifesave").on("click",function(){
      str = "(生活)";
      const key = $("#key").val();
      const keyhide = $("#key").val() + str;
      const value = $("#memo").val();
          
      for(let i=0; i<localStorage.length; i++){
        const datakey=localStorage.key(i);
        if(keyhide==datakey){
          // console.log(key);
          // console.log(localStorage.key(i));
          alert("「生活分類」に同じのデータタイトルがもう既存しました！\nほかのタイトル名を取ってください！\nあるいは、\n「Edit」ボタンを押してください！");
          //clear the textbox and input
          $("#key").val('');
          $("#memo").val('');
          return 1;
        }       
      }
      localStorage.setItem(keyhide, value);
      alert("成功的に「生活」分類に保存されました");
      const html ='<tr><th>' +key+'</th><td>'+value+'</td></tr>';
      //clear the textbox and input
      $("#key").val('');
      $("#memo").val('');
      $("#lifelist").append(html);
    });

    //ページ読み込み：保存データ取得表示
    for(let i=0; i<localStorage.length; i++){
      const key   = localStorage.key(i);
      if((key.indexOf("(生活)"))!=-1){
        const value = localStorage.getItem(key);
        const html = '<tr><th>'+key.substr(0,key.length-4)+'</th><td>'+value+'</td></tr>';
        $("#lifelist").append(html);
      }
    }

    //Education-save
    $("#educationsave").on("click",function(){
      str = "(教育)";
      const key = $("#key").val();
      const keyhide = $("#key").val() + str;
      const value = $("#memo").val();
          
      for(let i=0; i<localStorage.length; i++){
        const datakey=localStorage.key(i);
        if(keyhide==datakey){
          // console.log(key);
          // console.log(localStorage.key(i));
          alert("「教育分類」に同じのデータタイトルがもう既存しました！\nほかのタイトル名を取ってください！\nあるいは、\n「Edit」ボタンを押してください！");
          //clear the textbox and input
          $("#key").val('');
          $("#memo").val('');
          return 1;
        }       
      }
      localStorage.setItem(keyhide, value);
      alert("成功的に「教育」分類に保存されました");
      const html ='<tr><th>' +key+'</th><td>'+value+'</td></tr>';
      //clear the textbox and input
      $("#key").val('');
      $("#memo").val('');
      $("#educationlist").append(html);
    });

    //ページ読み込み：保存データ取得表示
    for(let i=0; i<localStorage.length; i++){
      const key   = localStorage.key(i);
      if((key.indexOf("(教育)"))!=-1){
        const value = localStorage.getItem(key);
        const html = '<tr><th>'+key.substr(0,key.length-4)+'</th><td>'+value+'</td></tr>';
        $("#educationlist").append(html);
      }
    }

    //Others-save
    $("#otherssave").on("click",function(){
      str = "(その他)";
      const key = $("#key").val();
      const keyhide = $("#key").val() + str;
      const value = $("#memo").val();
          
      for(let i=0; i<localStorage.length; i++){
        const datakey=localStorage.key(i);
        if(keyhide==datakey){
          // console.log(key);
          // console.log(localStorage.key(i));
          alert("「その他分類」に同じのデータタイトルがもう既存しました！\nほかのタイトル名前を取ってください！\nあるいは、\n「Edit」ボタンを押してください！");
          //clear the textbox and input
          $("#key").val('');
          $("#memo").val('');
          return 1;
        }       
      }
      localStorage.setItem(keyhide, value);
      alert("成功的に「その他」分類に保存されました");
      const html ='<tr><th>' +key+'</th><td>'+value+'</td></tr>';
      //clear the textbox and input
      $("#key").val('');
      $("#memo").val('');
      $("#otherslist").append(html);
    });

    //ページ読み込み：保存データ取得表示
    for(let i=0; i<localStorage.length; i++){
      const key   = localStorage.key(i);
      if((key.indexOf("(その他)"))!=-1){
        const value = localStorage.getItem(key);
        const html = '<tr><th>'+key.substr(0,key.length-5)+'</th><td>'+value+'</td></tr>';
        $("#otherslist").append(html);
      }
    }

   //Edit & Clear
   //Life-edit
   $("#lifeedit").on("click",function(){
    str = "(生活)";
    const key = $("#key").val();
    const keyhide = $("#key").val() + str;
    const value = $("#memo").val();
    for(let i=0; i<localStorage.length; i++){
      const datakey=localStorage.key(i);
      if((datakey.indexOf("(生活)"))!=-1){
        localStorage.setItem(keyhide, value);
      }
    }
    alert("成功的に編集しました");
    const html ='<tr><th>' +key+'</th><td>'+value+'</td></tr>';
          
    //clear the textbox and input
    $("#key").val('');
    $("#memo").val('');
    $("#lifelist").append(html);

   });

   //Life-clear 
   $("#lifeclear").on("click",function(){
    str = "(生活)";
    const key = $("#key").val();
    const keyhide = $("#key").val() + str;
    for(let i=0; i<localStorage.length; i++){
      const datakey=localStorage.key(i);
      if((datakey.indexOf("(生活)"))!=-1){
        localStorage.removeItem(keyhide);
      }
    }
    alert("成功的にクリアしました");
    $("#key").val('');
    $("#memo").val('');
   });

   //Education-edit
   $("#educationedit").on("click",function(){
    str = "(教育)";
    const key = $("#key").val();
    const keyhide = $("#key").val() + str;
    const value = $("#memo").val();
    for(let i=0; i<localStorage.length; i++){
      const datakey=localStorage.key(i);
      if((datakey.indexOf("(教育)"))!=-1){
        localStorage.setItem(keyhide, value);
      }
    }
    alert("成功的に編集しました");
    const html ='<tr><th>' +key+'</th><td>'+value+'</td></tr>';
          
    //clear the textbox and input
    $("#key").val('');
    $("#memo").val('');
    $("#educationlist").append(html);

   });

   //Education-clear 
   $("#educationclear").on("click",function(){
    str = "(教育)";
    const key = $("#key").val();
    const keyhide = $("#key").val() + str;
    for(let i=0; i<localStorage.length; i++){
      const datakey=localStorage.key(i);
      if((datakey.indexOf("(教育)"))!=-1){
        localStorage.removeItem(keyhide);
      }
    }
    alert("成功的にクリアしました");
    $("#key").val('');
    $("#memo").val('');
   });

   //Others-edit
   $("#othersedit").on("click",function(){
    str = "(その他)";
    const key = $("#key").val();
    const keyhide = $("#key").val() + str;
    const value = $("#memo").val();
    for(let i=0; i<localStorage.length; i++){
      const datakey=localStorage.key(i);
      if((datakey.indexOf("(その他)"))!=-1){
        localStorage.setItem(keyhide, value);
      }
    }
    alert("成功的に編集しました");
    const html ='<tr><th>' +key+'</th><td>'+value+'</td></tr>';
          
    //clear the textbox and input
    $("#key").val('');
    $("#memo").val('');
    $("#otherslist").append(html);

   });

   //Others-clear 
   $("#othersclear").on("click",function(){
    str = "(その他)";
    const key = $("#key").val();
    const keyhide = $("#key").val() + str;
    for(let i=0; i<localStorage.length; i++){
      const datakey=localStorage.key(i);
      if((datakey.indexOf("(その他)"))!=-1){
        localStorage.removeItem(keyhide);
      }
    }
    alert("成功的にクリアしました");
    $("#key").val('');
    $("#memo").val('');
   });




    $(".classification-hover").hover(
      function(){
        $(this).find(".text-contents").addClass("text-active");
      },
      function(){
        $(this).find(".text-contents").removeClass("text-active");
      });

    $(".classification-hover").hover(
      function(){
        $(this).find(".text-contents").addClass("text-active");
      },
      function(){
        $(this).find(".text-contents").removeClass("text-active");
      });

});


