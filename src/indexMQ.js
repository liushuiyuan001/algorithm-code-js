class indexMinPQ {
      constructor() {
            this.N = 0;
            this.pq = [];
            this.qp = [];
            this.keys = []
      }
      isEmpty() {
            return this.N === 0
      }
      contains(k) {
         return qp[k]
      }
      insert(k,v) {
            this.N++
            this.pq[k] = this.N
            this.qp[N] = k
            this.keys[k] = v
            _swim(N)
      }
      _swim(k) {
            while (k > 1 && this.less(k/2, k)) {
                  this.exch(k/2,k)
                  k = k/2
            }
      }
      _sink(k) {
          while (2*k < this.N) {
            let j = 2*k
            if(j < this.N && this.less(j,j+1)){
                  j++
            }
            if (!this.less(k,j)) {
                  break
             }
             this.exch(k,j)
             k = j    
          }
      }
      less(i,j) {
          return  this.keys[parseInt(i)] < this.keys[parseInt(j)]
      }
      exch(i,j) {
           let temp = this.keys[parseInt(i)]
           this.keys[parseInt(i)] = this.keys[parseInt(j)]
           this.keys[parseInt(j)] = temp
      }
      min() {
            return this.keys[this.pq[1]]
      }
      change(k,key) {
          this.keys[k] = key
          this._swim(this.qp[k])
          this._sink(this.qp[k])
      }
      delete(k) {
          let index = this.pq[k]
          this.exch(index, this.N--)
          this._swim(index)
          this._sink(index)
          this.keys[k] = null
          this.qp[k] = undefined
      }

}