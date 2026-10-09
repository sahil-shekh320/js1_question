// function removeDuplicates(str)
// {
//   let str1 = ""
//   for(let i=0;i<str.length;i++)
//   {
//     if(str1.indexOf(str[i])== -1)
//     {
//       str1 += str[i]
//     }
//   }
//   return str1
// }

// console.log(removeDuplicates("programming"))



// function reverseWords(str){
//   let str1 = str.split(" ")
//   let j = str1.length-1
//   for(let i=0;i<str1.length;i++)
//   {
//     if(i<j)
//     {
//       let temp = str1[i]
//       str1[i] = str1[j]
//       str1[j] = temp
//       j--
//     }
//   }

//   console.log(str1)
// }

// reverseWords("I love javascript")


// function longestWord(str)
// {
//   let str1 = str.split(" ")
  
//   let long = ""
//   for(let i=0;i<str1.length;i++)
//   {
//     if(str1[i].length>long.length)
//     {
//       long = str1[i]
//     }
//   }

//   return long
  
// }

// console.log(longestWord("I love javascript programming"))






// function secondLargest(arr)
// {
//   let first = -Infinity
//   let sec = -Infinity

//   for(let i=0;i<arr.length;i++)
//   {
//     if(arr[i]>first)
//     {
//       sec = first
//       first = arr[i]
//     }else if(arr[i]>sec && arr[i] != first)
//     {
//       sec = arr[i]
//     }
//   }

//   return sec
// }

// console.log(secondLargest([10, 5, 20, 8, 20, 15, 3]))






// function firstRepeating(arr)
// {
//   let obj = {}

//   for(let item of arr)
//   {
//     if(obj[item])
//     {
//       return item
//     }else{
//       obj[item] = 1
//     }
//   }
// }

// console.log(firstRepeating([5, 3, 4, 3, 5, 2]))



// function firstNonRepeating(arr)
// {
//   let obj = {}
//   for(let item of arr)
//   {
//     if(obj[item])
//     {
//       obj[item]++
//     }else{
//       obj[item] = 1
//     }
//   }
//   console.log(obj)
//   for(let item in obj)
//   {
//     if(obj[item]==1){
//       return item
//     }
//   }
// }

// console.log(firstNonRepeating([4, 5, 4, 2, 5, 7, 2]))





// function countUnique(arr)
// {
//   let obj={}
//   let count = 0
//   for(let item of arr)
//   {
//     if(obj[item])
//     {
//       obj[item]++
//     }else{
//       obj[item] = 1
//     }
//   }
//   console.log(obj)
//   for(let item in obj)
//   {
    
//       count++
   
//   }
//   return count
// }

// console.log(countUnique([4, 5, 4, 2, 5, 7, 2]))


// function rotateRight(arr, k)
// {
//   let arr1 = []
//   for(let i=arr.length-k;i<arr.length;i++)
//   {
//     arr1.push(arr[i])
//   }
//   for(let i=0;i<arr.length-k;i++)
//   {
//     arr1.push(arr[i])
//   }

//   return arr1
// }

// console.log(rotateRight([10, 20, 30, 40], 1))


// function isPalindrome(str)
// {
//   let str1 = ""
//   for(let i=str.length-1;i>=0;i--)
//   {
//     str1 += str[i]
//   }
//   if(str == str1)
//   {
//     return "palindrom"
//   }else{
//     return "not palindrom"
//   }
// }

// console.log(isPalindrome("mamcc"))



function StudentRecords(Data) {
 
 let arr = []
 
 for(let item of Data)
 {
  if(item.marks>50)
  {
    arr.push(item)
  }
 }
 return arr
}

console.log(StudentRecords([
  {"name": "John", "id": 123, "marks": 98},
  {"name": "Baba", "id": 101, "marks": 23},
  {"name": "yaga", "id": 200, "marks": 45},
  {"name": "Wick", "id": 115, "marks": 75}
]))




function removeDuplicates(str) {
   let str1 = ""
  for(let i=0;i<str.length;i++)
  {
    if(str1.indexOf(str[i]) == -1)
    {
      str1 += str[i]
    }
  }
  
  console.log(str1)
  return str1
}

console.log(removeDuplicates("mississippi"));



function firstNonRepeating(str) {
    let obj = {}

  for(let i =0 ;i<str.length;i++)
  {
    if(obj[str[i]])
    {
      obj[str[i]] ++
    }else{
      obj[str[i]] = 1
    }
  }
  console.log(obj)
  for(let item in obj)
  {
    if(obj[item] > 1)
    {
      return item 
    }
  }
  return -1
}

console.log(firstNonRepeating("aabbcdde"));