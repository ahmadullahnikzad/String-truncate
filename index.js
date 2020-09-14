function truncateString(str, num) {
  if(str.length===num&&str.length===num.length){
    str=str.slice(0,num);
    return str;
  }else if(str.length>num&&str.length>num.length){
    return str.slice(0,num)+'...';
  }else{
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length+1);