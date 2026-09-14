import React from 'react'

export default function FormSelectFile() {
    const inputFile = React.useRef()
    const selectMaxNumFiles = React.useRef()
    const selectMaxSize = React.useRef()

    let maxNumfiles = [1,2,3,4,5]
    let maxFilesize = [50, 100, 200, 500, 1000]

    const onClickButton = () => {
        let maxNumFiles = selectMaxNumFiles.current.value
        let maxSize = selectMaxSize.current.value

        if(inputFile.current.files.length > maxNumFiles) {
            alert(`เลือกได้ไม่เกิน ${maxNumFiles} ไฟล์`)
            return
        }
        for (let f of inputFile.current.files) {
            if(f.size > maxSize * 1000){
                alert(`ไฟล์มีขนาดใหญ่เกิน ${maxSize} KB`)
                return
            }
        }
        alert('Files OK')
    }
    return(
        <div className="mt-4 mx-auto p-3 rounded"
        style={{ width:'400px', background:'#cee' }}>
        <form>
            <div className="form-group mb-3">
                <label htmlFor="maxNumFiles" className="form-label">จำนวนไฟล์สูงสุด</label>
                <select ref={selectMaxNumFiles} className="form-select form-select-sm">
                    {maxNumfiles.map(i => {
                        return <option key={i} value={i}>{i}</option>
                    })}
                </select>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="maxFilesize" className="form-label">ขนาดไฟล์สูงสุด (KB)</label>
                <select ref={selectMaxSize} className="form-select form-select-sm" id="maxFilesize">
                    {maxFilesize.map(size => {
                        return <option key={size} value={size}>{size}</option>
                    })}
                </select>
            </div>
            
            <div className="form-group mb-3">
                <label htmlFor="file" className="form-label">เลือกไฟล์</label>
                <input type="file" className="form-control form-control-sm" id="file" accept="image/*"
                ref={inputFile} multiple />
            </div>
            <div className="text-center mt-4">
                <button type="button" className="btn btn-primary" onClick={onClickButton}>
                    OK
                </button>
            </div>
        </form>
        </div>
    )
    }