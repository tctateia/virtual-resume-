 // Create and insert the title
    const title = document.createElement('h1');
    title.textContent = 'About';
    title.className = 'glowing-text';
    document.getElementById('dynamic-title').appendChild(title);

    // Create navigation links
    const navigation = document.getElementById('navigation');

    // LinkedIn link
    const linkedinLink = document.createElement('a');
    linkedinLink.href = 'https://www.linkedin.com/feed/';
    linkedinLink.textContent = 'LinkedIn';
    linkedinLink.target = '_blank'; // Open link in a new tab
    navigation.appendChild(linkedinLink);

    // Page navigation links
    const links = [
        { href: '#home', text: 'Home' },
        { href: '#Email', text: 'Email' },
        { href: '#contact', text: 'Contact' }
    ];

    links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.text;
        navigation.appendChild(anchor);
    });

  

