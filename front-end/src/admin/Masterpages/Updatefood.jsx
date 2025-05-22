import React from 'react'
import Sidebar from '../../component/Sidebar'

const Updatefood = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
               <Sidebar/>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                  <div className=""></div>
                </div>
                <div className="chartjs-size-monitor-shrink">
                  <div className=""></div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2 text-success">Update Food</h1>
                
              </div>
              <div className="container mt-5">
                <div className="adform">
                <h3 className='mb-3'>Update Food</h3>
                     <form class="row g-3">
                    <div class="col-md-6">
                        <label  class="form-label">Name</label>
                        <input type="text" class="form-control"  value="Mark" required/>
                    </div>
                      <div class="col-md-6">
                        <label for="validationCustom04" class="form-label">Catogary</label>
                        <select class="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                            <option>...</option>
                            <option>...</option>
                        </select>
                        <div class="invalid-feedback">
                        Please select a valid state.
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label  class="form-label">Img URL</label>
                        <input type="text" class="form-control" value="" required/>
                    </div>
                    <div class="col-md-6">
                        <label  class="form-label">Description</label>
                        <input type="text" class="form-control"  value="" required/>
                    </div>
                    
                    <div class="col-md-12">
                        <label  class="form-label">Type</label>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className='d-flex gap-1' style={{ margin: '10px 0' }}>
                                    <input type="text" class="form-control" name="key" placeholder="Option (e.g. half, full, large)"  />
                                    <input type="text" class="form-control" name="value" placeholder="Price (e.g. 200)"   />
                                </div>
                            </div>
                            <div>
                                <button className='d-flex btn btn-success' style={{ width: 'auto',height:"fit-content" }} type="button" >+</button>
                            </div>
                        </div>
                    </div>
                
                   
                
                
                    <div class="col-12">
                        <button class="btn btn-success" type="submit">Submit form</button>
                    </div>
                </form>
                </div>
              </div>
            </main>
        </div>
      </div>
    </>
  )
}

export default Updatefood