import React from 'react'
import './write.css'
function Write() {
    return (
        <div className="write">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt="" 
            className="writeImage" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileinput">
                    <i class="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id='fileinput' style={{display:'none'}}/>
                    <input type="text" className='writeInput' placeholder='Title' autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea 
                    className="writeInput writeText"  
                    placeholder='Tell your Story...'
                    />
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    )
}

export default Write
