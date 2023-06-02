import React from 'react'

const Mainscreen = () => {
  return (
    <div>
            <div className="AssesButtons">
              <div className="input__container">
                <label className="input__label">Class</label>
                <input placeholder="Enter the Class" className="input" name="text" type="text" />
                <p className="input__description">Enter the Class for which you want to Asses.</p>
              </div>
              <div className="input__container">
                <label className="input__label">Class</label>
                <input placeholder="Enter the Class" className="input" name="text" type="text" />
                <p className="input__description">Enter the Class for which you want to Asses.</p>
              </div>

            </div>
            <div className="parsecond">
              <div>
                <div className="image-comp">
                  <form className="form">
                    <span className="form-title">Upload your file</span>
                    <p className="form-paragraph">File should be an image</p>
                    <label htmlFor="file-input" className="drop-container">
                      <span className="drop-title">Drop files here</span> or
                      <input type="file" accept="image/*" required id="file-input" />
                    </label>
                  </form>
                </div>
                <div class="card-1"><h4>OCR</h4></div>
              </div>
              <div class="card-2"></div>
              <div class="card-3"></div>
            </div>
          </div>
  )
}

export default Mainscreen