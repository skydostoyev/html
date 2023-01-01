const domains={
   mySite:"https://lsknl2q7klj6cysu6wghon4m7a0rvuud.lambda-url.ap-northeast-1.on.aws",
   authSite:this.mySite,
   comment:"@mySite and authSite happen to be same."
}

window.addEventListener('load', (event) => {
          
   let _jwt = getJwt("@from the queryString or the localstorage")
   let _okRedirectUrl = postJwt(
      `${domains.mySite}/post/jwt`,
      _jwt,
      "@to mySite which demands an httponly login cookie or a jwt from the auth... site"
      )
   if(_okRedirectUrl){
     setLocation( _okRedirectUrl,
         "@to the given page which must be only for logged-in users"
         )
   }
   else { 
         showUI("@having a button to click to move to the auth site"
         ,()=>{setLocation(`${domains.authSite}/s3/mailPassc`,"move to the login page")}
         )
         wait("@button click")
         return
   }
 })

 function getJwt(cmmnt){
   const queryParams = new URLSearchParams(window.location.search);
   const jwt2 = {jwtS:null,signer:null}
   jwt2.jwtS = queryParams.get('jwt');
   jwt2.signer = queryParams.get('signer');
   if(!jwt2.jwtS && !jwt2.signer){
      jwt2 = localStorage.getItem("jwt")
   }else{localStorage.setItem("jwt",jwt2)}
   return jwt2
}

async function postJwt(url,jwt2,cmmnt){
   const myHeaders = new Headers();
   myHeaders.append("Content-Type","application/json");
   myHeaders.append('Accept', 'application/json');
   
   const myOpt = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      body:JSON.stringify(jwt2)
   };
   
   //  fetch with async:
   //  https://stackoverflow.com/questions/54950838/how-to-use-fetch-with-async-await/54950884#54950884
  const response = await fetch(url,myOpt)
  if(response.ok){return await response.json().redirectUrl}
  else{return false}
}
function setLocation(url,cmmnt){
   window.location.href=url
}
function showUI(cmmnt){
   document.getElementById("login").className += ' visible';
}
function wait(cmmnt){}
//--- --- --- --- --- --- --- --- --- ---


//--- --- --- --- --- --- --- --- --- ---


