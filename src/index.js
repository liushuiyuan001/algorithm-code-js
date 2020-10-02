class MaxPQ{
      constructor(props){
          this.pq = [];
          this.N = 0
          this.initWithArray(props)
      }
 
      initWithArray(arr) {
          for (const v of arr) {
            this.insert(v)
          }
      }

      insert(v) {
          this.pq[++this.N] = v
          this._swim(this.N)
      }
 
      delMax() {
        let max = this.pq[1]
        this.exch(1,this.N--)
        this.pq.length = this.N + 1
        this._sink(1)
        return max
      }
 
      less(i,j){
         return this.pq[parseInt(i)] < this.pq[parseInt(j)]
      }
 
      exch(i,j){
          let temp = this.pq[parseInt(i)]
          this.pq[parseInt(i)] = this.pq[parseInt(j)]
          this.pq[parseInt(j)] = temp
      }
 
      _swim(k) {
          while(k > 1 && this.less(k/2,k)) {
             this.exch(k/2,k)
             k = k/2
          }
      }
      _sink(k) {
          while(2*k <= this.N) {
              let j = 2*k
              if (j < this.N && !this.less(j,j+1)) {
                    j++  
              }
              if (!this.less(k,j)) {
                   break
              }
              this.exch(k,j)
              k = j    
          }
      }
 
 
 }
 let pq = new MaxPQ([1,2,3,4,5,6,7,8,9,10])
 console.log(pq.pq)
 window.pq = pq


