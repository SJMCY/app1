import React from 'react'

export default function FormText() {
    const textPswd = React.useRef()
    const textPswd2 = React.useRef()

    const onBlurPassword = () => {
        let pswd = textPswd.current.value
        if (pswd !== '' && !pswd.match(/^[0-9a-zA-Z]+$/)) {
            textPswd.current.value = ''
            alert('รหัสผ่านไม่ถูกต้อง ต้องเป็นตัวเลขหรือตัวอักษรengเท่านั้น')
        }
    }
    const onBlurPassword2 = () => {
        if(textPswd.current.value !== textPswd2.current.value) {
            textPswd2.current.value = ''
            alert('รหัสผ่านไม่ตรงกัน')
        }
    }
    return(
        <div className="mt-3 mx-auto p-3 rounded" 
        style={{ width:'400px', background:'#cee' }}>
        <form>
            <div className="form-group mb-2">
                <label htmlFor="login">ชื่อผู้ใช้:</label>
                <input type="text" className="form-control form-control-sm" 
                id="login" name="login" maxLength="20" />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="pswd">รหัสผ่าน</label>
                <input type="password" className="form-control form-control-sm" 
                id="pswd" name="pswd" maxLength="10" ref={textPswd} onBlur={onBlurPassword} />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="pswd2">ใส่รหัสผ่านซ้ำ</label>
                <input type="password" className="form-control form-control-sm" 
                id="pswd2" ref={textPswd2} onBlur={onBlurPassword2} />
            </div>
            <div className="form-group mb-4">
                <label htmlFor="memo">บันทึกช่วยจำ</label>
                <textarea className="form-control form-control-sm" 
                id="memo" name="memo" rows="2" maxLength="200">
                </textarea>
            </div>
            <div className="text-center">
                <button className="btn btn-sm px-4 primary">
                    OK
                </button>
            </div>
        </form>
        </div>
    )
}