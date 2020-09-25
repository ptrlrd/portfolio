const url = 'https://xivapi.com/freecompany/9228157111458900661?data=FCM'
const memberList = document.querySelector('.memberlist')

fetch(url)
    .then(checkStatus)
    .then(res => res.json())
    .then(data => generateMemberList(data))
    .catch(error => console.log('Something broke:', error))

/// Functions

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function generateMemberList(data) {
        let fcMember = `<table>`;
        for (let i = 0; i < data.FreeCompany.ActiveMemberCount; i += 1) {
            if (data.FreeCompanyMembers[i].Rank == "Jr. Officer" || data.FreeCompanyMembers[i].Rank == "Officer" || data.FreeCompanyMembers[i].Rank == "Leader" || data.FreeCompanyMembers[i].ID === 10211535 ) {
                 if (  Number.isInteger(i/4) === true) {
                    fcMember += '<tr><td><img src="';
                    fcMember += data.FreeCompanyMembers[i].Avatar;
                    fcMember += '"></td>';
                    fcMember += `<td><a href="https://na.finalfantasyxiv.com/lodestone/character/${data.FreeCompanyMembers[i].ID}" target="_blank" rel="noopener noreferrer">`;
                    fcMember += data.FreeCompanyMembers[i].Name;
                    fcMember += `</a></td>`;
                 } else {
                    fcMember += '<td><img src="';
                    fcMember += data.FreeCompanyMembers[i].Avatar;
                    fcMember += '"></td>';
                    fcMember += `<td><a href="https://na.finalfantasyxiv.com/lodestone/character/${data.FreeCompanyMembers[i].ID}" target="_blank" rel="noopener noreferrer">`;
                    fcMember += data.FreeCompanyMembers[i].Name;
                    fcMember += `</a></td>`;
                }
            }
        };
            
        fcMember += `</tr></table>`;
        console.log(fcMember);
        memberList.innerHTML = fcMember;
}


/*
for (let i = 0; i < data.FreeCompany.ActiveMemberCount; i += 1) {
    if (data.FreeCompanyMembers[i].Rank == "Jr. Officer" || data.FreeCompanyMembers[i].Rank == "Officer" || data.FreeCompanyMembers[i].Rank == "Leader" || data.FreeCompanyMembers[i].ID === 10211535 ) {
        fcMember += '<td><img src="';
        fcMember += data.FreeCompanyMembers[i].Avatar;
        fcMember += '"></td>';
        fcMember += `<td><a href="https://na.finalfantasyxiv.com/lodestone/character/${data.FreeCompanyMembers[i].ID}" target="_blank" rel="noopener noreferrer">`;
        fcMember += data.FreeCompanyMembers[i].Name;
        fcMember += `</a></td>`;
    } else if ( i && (i%4 === 1) ) {
        fcMember += `<tr>`;
    }
};


                if ( ) {
                    fcMember += `<tr>`;
                } else {
                    fcMember += '<td><img src="';
                    fcMember += data.FreeCompanyMembers[i].Avatar;
                    fcMember += '"></td>';
                    fcMember += `<td><a href="https://na.finalfantasyxiv.com/lodestone/character/${data.FreeCompanyMembers[i].ID}" target="_blank" rel="noopener noreferrer">`;
                    fcMember += data.FreeCompanyMembers[i].Name;
                    fcMember += `</a></td>`;
                }
*/