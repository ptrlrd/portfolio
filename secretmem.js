// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if(xhr.readyState === 4 && xhr.status === 200) {
//         const memberlist = document.querySelector('.memberlist')
//         let freecompany = JSON.parse(xhr.responseText);
        
//         let fcMember = `<table><tr><th>Display Photo</th><th>Character Name</th><th>Character Rank</th></tr>`;
        
//         for (let i = 0; i < freecompany.FreeCompany.ActiveMemberCount; i += 1) {
//             // console.log(`${freecompany.FreeCompanyMembers[i].Name}`);
//             fcMember += `Welcome to `;
//             fcMember += '<tr><td><img src="';
//             fcMember += freecompany.FreeCompanyMembers[i].Avatar;
//             fcMember += '"></td>';
//             fcMember += `<td><a href="https://na.finalfantasyxiv.com/lodestone/character/${freecompany.FreeCompanyMembers[i].ID}" target="_blank" rel="noopener noreferrer">`;
//             fcMember += freecompany.FreeCompanyMembers[i].Name;
//             fcMember += `</a></td>`;
//             fcMember += '<td>';
//             fcMember += freecompany.FreeCompanyMembers[i].Rank;
//             fcMember += '</td></tr>';
//             // console.log(fcMember)
//             }
        
//         fcMember += `</table>`;
//         console.log(fcMember);
//         memberlist.innerHTML = fcMember;
//     }
// };
// xhr.open('GET', 'https://xivapi.com/freecompany/9228157111458900661?data=FCM');
// xhr.send();

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const memberlist = document.querySelector('.memberlist')
        let freecompany = JSON.parse(xhr.responseText);
        let fcMember = `<table><tr><th>Display Photo</th><th>Character Name</th><th>Character Rank</th></tr>`;
        for (let i = 0; i < freecompany.FreeCompany.ActiveMemberCount; i += 1) {
            if (freecompany.FreeCompanyMembers[i].Rank == "Jr. Officer" || freecompany.FreeCompanyMembers[i].Rank == "Officer" || freecompany.FreeCompanyMembers[i].Rank == "Leader" || freecompany.FreeCompanyMembers[i].ID === 10211535 ) {
                fcMember += '<tr><td><img src="';
                fcMember += freecompany.FreeCompanyMembers[i].Avatar;
                fcMember += '"></td>';
                fcMember += `<td><a href="https://na.finalfantasyxiv.com/lodestone/character/${freecompany.FreeCompanyMembers[i].ID}" target="_blank" rel="noopener noreferrer">`;
                fcMember += freecompany.FreeCompanyMembers[i].Name;
                fcMember += `</a></td>`;
                fcMember += '<td>';
                fcMember += freecompany.FreeCompanyMembers[i].Rank;
                fcMember += '</td></tr>';
            }};
        
        fcMember += `</table>`;
        console.log(fcMember);
        memberlist.innerHTML = fcMember;
    }
};
xhr.open('GET', 'https://xivapi.com/freecompany/9228157111458900661?data=FCM');
xhr.send();
