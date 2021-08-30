import React, { useState } from 'react'

import { Jutsu } from 'react-jutsu'

const Jitsi = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')
  const instituteId = localStorage.getItem("institute");

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return call ? (
    <Jutsu
      roomName={room}
      displayName={name}
      password={password}
      interfaceConfigOverwrite={{
        SHOW_BRAND_WATERMARK: false,
SHOW_JITSI_WATERMARK: false,
SHOW_WATERMARK_FOR_GUESTS: false,
SHOW_POWERED_BY: false
      }}
      containerStyles={{ width: '100%', height: '800px' }}
      onMeetingEnd={() => {console.log('Meeting has ended');
      var requestOptions = {
        method: "GET",
        headers: {
          "Authorization":`Bearer ${instituteId}`,
          "Content-Type": "application/json"
        },
        redirect: "follow",
      };
      const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
      fetch(`${apiURL}/lecture/live/${this.props.location.state}/end`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
        }).catch((error) => console.log("error", error));
      window.location.href="/lectures"
    }}
      loadingComponent={<p>loading ...</p>}
      errorComponent={<p>Oops, something went wrong</p>} />
  ) : (
    <form>
      <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
      <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleClick} type='submit'>
        Start / Join
      </button>
    </form>
  )
}

export default Jitsi
