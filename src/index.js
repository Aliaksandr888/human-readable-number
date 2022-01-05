module.exports = function toReadable (n) {
    let arr = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','thirteen','fourteen','fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr10 = ['0','ten','twenty', 'thirty','forty','fifty', 'sixty','seventy','eighty','ninety']
    
    if(n<20){
      return arr[n]
    }else if(n<100){
      n=n.toString().split('').map(Number)
      if(n[1]===0){
        return arr10[n[0]]
      }else{
        return arr10[n[0]]+' '+arr[n[1]]
      }
    }else if(n>99){
      n=n.toString().split('').map(Number);
      if(n[1]+n[2]===0){
         return arr[n[0]]+" hundred"
      }else if(n[1]===0){
       return arr[n[0]]+" hundred "+arr[n[2]] 
      }else if(n[2]===0){
        return arr[n[0]]+" hundred "+arr10[n[1]]
      }else if(n[1]+""+n[2]>20){
        return arr[n[0]]+" hundred "+arr10[n[1]]+" "+arr[n[2]]
      }else if(n[1]+""+n[2]<20){
        return arr[n[0]]+" hundred "+arr[n[1]+""+n[2]]
      }
     
    }
}
