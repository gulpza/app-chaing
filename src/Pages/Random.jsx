import React, { useState } from 'react';
import logo from '../assets/Images/cha.jpeg';
import cup from '../assets/Images/cup.png';
import Swal from 'sweetalert2';
import 'animate.css';

function Random() {
    const [number, setNumber] = useState('');
    const [resultNumber, setResultNumber] = useState('');
    const [visible, setVisible] = useState(true);

    const randomNumber = () => {
        setVisible(false);

        let targets = [];
        for (let i = 0; i < 100; i++) {   
            targets.push(i);
        }
        let targetIndex = Math.floor(Math.random() * targets.length);
        let target = targets[targetIndex];
        let current = Math.floor(Math.random() * 100);
        let iterations = 0;
        let maxIterations = 15;

        const interval = setInterval(() => {
            setNumber(current.toString().padStart(2, '0'));
            current = Math.floor(Math.random() * 100);
            setResultNumber(current.toString().padStart(2, '0'));
            
            iterations++;
            if (iterations >= maxIterations) {
                clearInterval(interval);
                setNumber(target.toString().padStart(2, '0'));
                setNumber("");
                Swal.fire({
                    html: `<img src="${logo}" style="width: 140px; height: auto; margin-bottom: 20px;" /><div style="font-size: 10em; font-weight: bold;">${target.toString().padStart(2, '0')}</div>`,
                    confirmButtonText: 'ตกลง',
                    width: 300,
                    customClass: {
                        popup: 'animate__animated animate__bounceIn',
                        confirmButton: 'btn-custom'
                    },
                    didClose: () => {
                        setVisible(true); // Show the container again after the modal is closed
                    }
                });
            }
        }, 200);
    };

    return (
        <>
            <div className="header">
            {/* <img src={logo} style={{ maxWidth: '100%', height: 'auto' }} className="images" /> */}
            </div>
                {visible && (
                <div className="number-container" style={{ position: 'relative', display: 'inline-block' }}>
                <img src={cup} style={{ maxWidth: '100%', height: 'auto' }} className="images" />
                <button 
                    onClick={randomNumber} 
                    style={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)', 
                        backgroundColor: 'rgba(255, 255, 255, 0.7)', 
                        border: 'none', 
                        padding: '10px 20px', 
                        fontSize: '36px',
                        cursor: 'pointer'
                    }}
                   
                >
                    กดสุ่มเลข
                </button>
                </div>
            )}
                {!visible && (
                    <div>
                        <h2>กำลังสุ่มตัวเลข...</h2>
                     <div className="number-container" style={{ position: 'relative', display: 'inline-block', fontSize: '14em', fontWeight: 'bold' }}>
                      {number}
                    </div>
                    </div>
                )}
            
        </>
    );
}

export default Random;
