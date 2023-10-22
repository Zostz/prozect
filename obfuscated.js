try {
    if (window.location.href.search('quizizz.com')!= -1) {
        if (window.location.href.search('quizizz.com/admin/quiz') == -1) {
            alert("You must execute this script on the quiz controller's page.");
            throw error
        };

        alert(`𝗔𝗻𝘁𝗶 𝗖𝗵𝗲𝗮𝘁 𝗯𝘆 𝗔 - 𝗭𝗲𝗻
- You felt tired and disappointed because your student using cheats to get answers?
- All you need to do is enter your quiz Pin code and then there will be NO worries about cheats.
* Note:
    + This just prevents students using cheats to receive answers from Quizizz, not working if they use search engine from third-party!
    + Remember to activate this script before sharing the Pin code to students. If not, it may not work!
    + This could be not working anytime due to cheaters always try to break protection.
- Please contact author if the script not working!`)

        async function getRoomHash() {
            const response = await fetch('https://game.quizizz.com/play-api/v5/checkRoom', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    roomCode: prompt('Please enter your room code(Not including spaces):')
                })
            }).then(function (response) { return response.json() });
            return response.room.hash
        }

        async function antiCheat(roomHash) {
            fetch('https://game.quizizz.com/play-api/v5/join', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'credentials': 'include'
                },
                body: JSON.stringify({
                    roomHash: roomHash,
                    player: {
                        id: 'Reconnecting...᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼',
                        avatarId: '../../../../../../../../../../img/quizizz_logos/q-logo-icon.png?'
                    },
                    ip: '192.168.0.1'
                })
            })

            fetch(`https://quizizz.com/_api/main/game/${roomHash}/player`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'credentials': 'include'
                },
                body: JSON.stringify({
                    playerId: 'Reconnecting...᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼'
                })
            })

            alert('Refresh page to activate script!')
            location.reload()
        }

        const roomHash = getRoomHash();
        antiCheat(roomHash)
    } else {
        throw error
    }
} catch {
    
}
