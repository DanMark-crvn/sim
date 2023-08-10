function checkNetwork() {
    const mobileNumber = document.getElementById('mobilenumber').value;
    const prefixes = {
        //FOR GLOBE or TM
        '0904': 'Globe or TM',
        '0905': 'Globe or TM',
        '0906': 'Globe or TM',
        '0915': 'Globe',
        '0916': 'Globe or TM',
        '0917': 'Globe',
        '0926': 'Globe or TM',
        '0927': 'Globe or TM',
        '0935': 'Globe or TM',
        '0936': 'Globe or TM',
        '0937': 'ABS-CBN mobile (now-defunct)',
        '0945': 'Globe or TM',
        '0953': 'TM',
        '0954': 'Globe, TM, or Globe At Home Prepaid WiFi',
        '0955': 'Globe or TM',
        '0956': 'Globe or TM',
        '0957': 'Globe or TM',
        '0958': 'Globe or TM',
        '0959': 'Globe or TM',
        '0965': 'Globe or TM',
        '0966': 'Globe or TM',
        '0967': 'Globe or TM',
        '0975': 'Globe or TM',
        '0976': 'GOMO',
        '0977': 'TM, Globe Prepaid, or Globe Postpaid Plan - formerly Next Mobile',
        '0978': 'Globe - formerly Next Mobile',
        '0979': 'Globe - formerly Next Mobile',
        '0995': 'Globe or TM',
        '0996': 'Cherry Prepaid',
        '0997': 'Globe or TM',
        '0817': 'Globe',
        '09173': 'Globe Postpaid',
        '09175': 'Globe Postpaid',
        '09176': 'Globe Postpaid',
        '09178': 'Globe Postpaid',
        '09253': 'Globe Postpaid',
        '09255': 'Globe Postpaid',
        '09256': 'Globe Postpaid',
        '09257': 'Globe Postpaid',
        '09258': 'Globe Postpaid',

        //FOR SMART or TNT
        '0813': 'Smart Postpaid',
        '0900': 'Smart',
        '0907': 'TNT',
        '0908': 'Smart',
        '0909': 'TNT',
        '0910': 'TNT',
        '0911': 'Smart',
        '0912': 'TNT',
        '0913': 'Smart',
        '0914': 'Smart',
        '0918': 'Smart or TNT',
        '0919': 'Smart or TNT',
        '0920': 'Smart or TNT - formerly Addict Mobile number',
        '0921': 'Smart or TNT',
        '0928': 'Smart or TNT',
        '0929': 'TNT',
        '0930': 'TNT - formerly Red Mobile',
        '0938': 'TNT - formerly Red Mobile',
        '0939': 'TNT - formerly Red Mobile',
        '0940': 'Smart',
        '0946': 'TNT',
        '0947': 'TNT',
        '0948': 'TNT',
        '0949': 'TNT',
        '0950': 'TNT',
        '0951': 'Smart',
        '0960': 'Smart',
        '0961': 'Smart',
        '0963': 'TNT 5G ready SIM',
        '0964': 'Smart or PLDT Prepaid WiFi',
        '0968': 'Smart',
        '0969': 'Smart',
        '0970': 'Smart',
        '0971': 'Smart',
        '0980': 'Smart',
        '0981': 'Smart',
        '0982': 'Smart or TNT',
        '0985': 'Smart or TNT',
        '0989': 'TNT',
        '0998': 'Smart',
        '0999': 'Smart - formerly Umobile number',

        //FOR SUN CELLULAR
        '0922': 'Sun Cellular (now Smart)',
        '0923': 'Sun Cellular (now Smart)',
        '0924': 'Sun Cellular (now Smart)',
        '0925': 'Sun Cellular (now Smart)',
        '0931': 'Sun Cellular (now Smart)',
        '0932': 'Sun Cellular (now Smart)',
        '0933': 'Sun Cellular (now Smart)',
        '0934': 'Sun Cellular (now Smart)',
        '0941': 'Sun Cellular (now Smart)',
        '0942': 'Sun Cellular (now Smart)',
        '0943': 'Sun Cellular (now Smart)',
        '0944': 'Sun Cellular (now Smart)',
        '0952': 'Sun Cellular (now Smart)',
        '0962': 'Sun Cellular (now Smart)',
        '0972': 'Sun Cellular (now Smart)',
        '0973': 'Sun Cellular (now Smart) - formerly Extelcom',
        '0974': 'Sun Cellular (now Smart) - formerly Extelcom',

        //FOR DITO SIM
        '0991': 'DITO',
        '0992': 'DITO',
        '0993': 'DITO',
        '0994': 'DITO',
        '0895': 'DITO',
        '0896': 'DITO',
        '0897': 'DITO',
        '0898': 'DITO'
    };

    const unassignedPrefixes = {
        '0899': 'Unassigned network',
        '0901': 'Unassigned network',
        '0902': 'Unassigned network',
        '0903': 'Unassigned network',
        '0983': 'Unassigned network',
        '0984': 'Unassigned network',
        '0986': 'Unassigned network',
        '0987': 'Unassigned network',
        '0988': 'Unassigned network',
        '0990': 'Unassigned network'
    };

    const prefix = mobileNumber.substring(0, 4);
    let resultText = '';

    if (prefixes.hasOwnProperty(prefix)) {
        resultText = `<span style="color: #23DC3D;">The mobile number belongs to ${prefixes[prefix]}.</span>`;
    } else if (unassignedPrefixes.hasOwnProperty(prefix)) {
        resultText = `<span style="color: #E9D502;">The mobile number is from an ${unassignedPrefixes[prefix]}.</span>`;
    } else {
        resultText = '<span style="color: #ffcccb ;">The network for this mobile number is not recognized.</span>';
    }
    document.getElementById('result').innerHTML = resultText;
}