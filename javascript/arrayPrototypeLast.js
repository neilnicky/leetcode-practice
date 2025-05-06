// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
Array.prototype.last = function () {
    const lastEl = this.at(-1);
    if (lastEl === undefined) {
      return -1;
    }
  
    return lastEl;
  };
  
  nums = [1, 2, 3, "b", {}, 4, "bee"];
  
  console.log(nums.last());
  