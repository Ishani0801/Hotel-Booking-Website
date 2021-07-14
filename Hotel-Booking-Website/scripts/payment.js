
if (!isLogin || isLogin === 'false') {
    document.getElementById('pay-now-button').disabled = true;
} else if (isLogin === 'true') {
document.getElementById('pay-now-button').disabled = false;
}

let payNow = e => {
	e.preventDefault();
	alert('Hi! Your booking is successfull!!');
};
