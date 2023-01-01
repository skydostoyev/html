try{
   Invoke-Expression "git add ." 
   $tm = Get-Date (Get-Date).AddHours(+9)
   Invoke-Expression "git commit -am '$tm'"
   Invoke-Expression "git push -u origin authUsingEmail"
}catch{Write-Host $_.Exception.Message}