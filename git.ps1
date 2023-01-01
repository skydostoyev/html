$branch = "authUsingEmail"
$tm = Get-Date (Get-Date).AddHours(+9)
$arr =@(
    "git add ." ,  
    "git commit -am '$tm'",
    "git push -u origin $branch"
) 
try{
   foreach($e in $arr){
      Invoke-Expression $e   
   }
   # Invoke-Expression "git add ." 
   # $tm = Get-Date (Get-Date).AddHours(+9)
   # Invoke-Expression "git commit -am '$tm'"
   # Invoke-Expression "git push -u origin authUsingEmail"
}catch{Write-Host $_.Exception.Message}