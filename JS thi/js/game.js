 //Thông số vòng quay
            let duration = 5; //Thời gian kết thúc vòng quay
            let spins    = 15; //Quay nhanh hay chậm 3, 8, 15
            let theWheel = new Winwheel({
                'numSegments'  : 8,     // Chia 8 phần bằng nhau
                'outerRadius'  : 212,   // Đặt bán kính vòng quay
                'textFontSize' : 18,    // Đặt kích thước chữ
                'rotationAngle': 0,     // Đặt góc vòng quay từ 0 đến 360 độ.
                'segments'     :        // Các thành phần bao gồm màu sắc và văn bản.
                [
                   {'fillStyle' : '#0066f9', 'text' : 'Giảm 10%'},
                   {'fillStyle' : '#dcf400', 'text' : 'Giam 20%'},
                   {'fillStyle' : '#0066f9', 'text' : 'Giảm 30%'},
                   {'fillStyle' : '#dcf400', 'text' : '1 Ly Matcha'},
                   {'fillStyle' : '#0f8f45', 'text' : 'Mất lượt'},
                   {'fillStyle' : '#d13a5b', 'text' : 'Mũ Highlands'},
                   {'fillStyle' : '#0f8f45', 'text' : 'Giảm 40%'},
                   {'fillStyle' : '#d13a5b', 'text' : 'Kem Cheese'}
                ],
                'animation' : {
                    'type'     : 'spinToStop',
                    'duration' : duration,
                    'spins'    : spins,
                    'callbackSound'    : playSound,     //Hàm gọi âm thanh khi quay
                    'soundTrigger'     : 'pin',         //Chỉ định chân là để kích hoạt âm thanh
                    'callbackFinished' : alertPrize,    //Hàm hiển thị kết quả trúng giải thưởng
                },
                'pins' :
                {
                    'number' : 32   //Số lượng chân. Chia đều xung quanh vòng quay.
                }
            });
            
            //Kiểm tra vòng quay
            let wheelSpinning = false;
            
            //Tạo âm thanh và tải tập tin tick.mp3.
            let audio = new Audio('tick.mp3');
            function playSound() {
                audio.pause();
                audio.currentTime = 0;
                audio.play();
            }
            
            //Hiển thị các nút vòng quay
            function statusButton(status) {
                if ( status==1 ) { //trước khi quay
                    document.getElementById('spin_start').removeAttribute("disabled");
                    document.getElementById('spin_reset').classList.add("hide");
                } else if ( status==2 ) { //đang quay
                    document.getElementById('spin_start').setAttribute("disabled", false);
                    document.getElementById('spin_reset').classList.add("hide");
                } else if ( status==3 ) { //kết quả
                    document.getElementById('spin_reset').classList.remove("hide");
                } else {
                    alert('Các giá trị của status: 1, 2, 3');
                }
            }
            statusButton(1);
            
            //startSpin
            function startSpin() {
                // Ensure that spinning can't be clicked again while already running.
                if (wheelSpinning == false) {
                    //CSS hiển thị button
                    statusButton(2);
                    
                    //Hàm bắt đầu quay
                    theWheel.startAnimation();

                    //Khóa vòng quay
                    wheelSpinning = true;
                }
            }
            
            //Result
            function alertPrize(indicatedSegment) {
                alert("Chúc mừng bạn trúng: " + indicatedSegment.text);
                
                //CSS hiển thị button
                statusButton(3);
            }

            //resetWheel
            function resetWheel() {
                //CSS hiển thị button
                statusButton(1);
                
                theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
                theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
                theWheel.draw();                // Call draw to render changes to the wheel.

                wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
            }



            function myFunction() {

  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");


  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
           
            function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  
  while (switching) {
    
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
      
      shouldSwitch = false;
     
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
     
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}