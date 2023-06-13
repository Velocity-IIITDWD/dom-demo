// Fetch the data from the API
fetch('/api/members.json')
  .then(response => response.json())
  .then(data => {
    const membersContainer = document.getElementById('membersContainer')

    // Iterate over each team
    for (const team in data) {
      const members = data[team]

      // Create a div for each team
      const teamDiv = document.createElement('div')
      teamDiv.className = 'team'

      // Create a heading for the team
      const teamHeading = document.createElement('h2')
      teamHeading.textContent = team
      teamDiv.appendChild(teamHeading)

      // Iterate over each member in the team
      for (const member of members) {
        // Create a card for each member
        const card = document.createElement('div')
        card.className = 'card'

        // Create an image element for the member's picture
        const image = document.createElement('img')
        image.src = member.picture
        card.appendChild(image)

        // Create a heading for the member's name
        const name = document.createElement('h3')
        name.textContent = member.name
        card.appendChild(name)

        // Create a paragraph for the member's description
        const description = document.createElement('p')
        description.textContent = member.description
        card.appendChild(description)

        // Append the card to the team div
        teamDiv.appendChild(card)
      }

      // Append the team div to the container
      membersContainer.appendChild(teamDiv)
    }
  })
  .catch(error => {
    console.error('Error:', error)
  })
