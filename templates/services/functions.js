(function () {

    const defaultArea = 'London';
    let area = '';
    let postcode = document.getElementById("postcode").value;

    getAreaByPostcode(postcode)
        .then(data => {
            if (data.result.nhs_ha == 'London') {
                area = data.result.admin_district;
                setTimeout(() => {
                    doContinue();
                }, 0);
            } else {
                area = defaultArea;
                setTimeout(() => {
                    doContinue();
                }, 0);
            }
        })
        .catch(error => {
            area = defaultArea;
            setTimeout(() => {
                doContinue();
            }, 0);
        });

    function doContinue(){
        document.getElementById("area1").innerHTML = area;
        document.getElementById("area2").innerHTML = area;
    }

    return false;

    function getAreaByPostcode(postcode) {
        
        const url = 'http://api.postcodes.io/postcodes/' + postcode;

        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                type: 'GET',
                data: {
                    key: 'value',
                },
                success: function (data) {
                    setTimeout(() => {
                        resolve(data)
                    }, 0);
                },
                error: function (error) {
                    setTimeout(() => {
                        reject(error)
                    }, 0);
                },
            })
        })
    }

})();