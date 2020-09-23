// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if(xhr.readyState === 4 && xhr.status === 200) {
//     let employees = JSON.parse(xhr.responseText);
// //     let statusHTML = '<ul class="bulleted">';
//     for (let i=0; i<employees.length; i += 1) {
//       if (employees[i].inoffice === true) {
//         statusHTML += '<li class="in">';
//       } else {
//         statusHTML += '<li class="out">';
//       }
//       statusHTML += employees[i].name;
//       statusHTML += '</li>';
//     }
//     statusHTML += '</ul>';
//     document.getElementById('employeeList').innerHTML = statusHTML;
//   }
// };
// xhr.open('GET', '../data/employees.json');
// xhr.send();

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const memberlist = document.querySelector('.memberlist')
        let freecompany = JSON.parse(xhr.responseText);
        
        let fcMember = `<table><tr><th>Display Photo</th><th>Character Name</th><th>Character Rank</th></tr>`;
        
        for (let i = 0; i < freecompany.FreeCompany.ActiveMemberCount; i += 1) {
            // console.log(`${freecompany.FreeCompanyMembers[i].Name}`);
            fcMember += '<tr><td><img src="';
            fcMember += freecompany.FreeCompanyMembers[i].Avatar;
            fcMember += '"></td>';
            fcMember += `<td><a href="https://na.finalfantasyxiv.com/lodestone/character/${freecompany.FreeCompanyMembers[i].ID}" target="_blank" rel="noopener noreferrer">`;
            fcMember += freecompany.FreeCompanyMembers[i].Name;
            fcMember += `</a></td>`;
            fcMember += '<td>';
            fcMember += freecompany.FreeCompanyMembers[i].Rank;
            fcMember += '</td></tr>';
            // console.log(fcMember)
            }
        
        fcMember += `</table>`;
        console.log(fcMember);
        memberlist.innerHTML = fcMember;
    }
};
xhr.open('GET', 'https://xivapi.com/freecompany/9228157111458900661?data=FCM');
xhr.send();

// Path freecompany.FreeCompanyMembers[0].Name
