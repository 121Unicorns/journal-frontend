function About() {
    return (
        <div id="bread3">
            <div class="tile is-ancestor">
                <div class="tile is-4 is-vertical is-parent">
                    <div class="tile is-child box">
                        <p class="title">Introducing Journal</p>
                        <p style={{ textAlign: 'justify' }}>A paper notebook and pen are fine for journaling, but Journal offers more. You can easily edit, update or delete existing posts. Did you achieve something? Go on a date? Have an emotional breakthrough? Tell Journal! You can get clear context on what you've accomplished and have a clear picture of where you're going.</p>
                    </div>
                    <div class="tile is-child box">
                        <img src="journal6.jpg" />
                    </div>
                </div>
                <div class="tile is-parent">
                    <div class="tile is-child box">
                        <p class="title">So, why should you start journaling?</p>
                        <p style={{ textAlign: 'justify' }}>Journaling is simply writing down your thoughts and feelings so you can have more clarity. And if you struggle with stress, depression, or anxiety, keeping a journal can be a great idea. It can help you gain control of your emotions and improve your mental health.</p>
                        <p style={{ textAlign: 'justify' }}>Journaling can help you:</p>
                        <br/>
                        <ul style={{listStyleType: 'disc', marginLeft: '2em'}}>
                            <li>Manage anxiety</li>
                            <li>Reduce stress</li>
                            <li>Cope with depression</li>
                        </ul>
                        <br/>
                        <p style={{ textAlign: 'justify' }}>Journal is a great app for this.</p>
                        <br/>
                        <ul style={{listStyleType: 'disc', marginLeft: '2em'}}>
                            <li>Easy entry: If it takes more than a couple of clicks or taps to add a journal entry, chances are you're not going to do it.</li>
                            <li>Pleasant interface: A minimalist, uncluttered interface helps you focus on your thoughts and makes journaling a pleasant experience.</li>
                            <li>Off the grid: You control your data so your secrets are safe with you.</li>
                            <li>Syncing: Syncing will make sure your journal's up to date no matter what device you're using.</li>
                            <li>Affordability: Keep your money! Here at Journal, we believe journaling shouldn't be expensive.</li>
                        </ul>
                        <br/>
                        <p style={{ textAlign: 'justify' }}>Try Journal today. It's free!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;