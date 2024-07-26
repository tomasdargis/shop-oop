export class layout {
    constructor() {
        this.render();
    }
    header() {
        const HTML = `
        <header class ="container">
            <div class ="row">
                <div class ="col">
                 <img src="#" alt="Logo" >

                    <nav>
                        <a href="./">Home</a>
                        <a href="./services">Servises</a>
                        <a href="./team">Team</a>
                        <a href="./contact-us">Contact us</a>
                    </nav>
                </div>
            </div>
        </header>`;
        return HTML;
    }

    main() {
        const HTML = `
         <main class ="container">
           <section class ="row">
                    <h1 class ="col-12 main-title">Pirmas posukis</h1>
           </section>
           <section class ="row">
                <div class = "col-12"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas assumenda vero temporibus veniam eius hic eum quos quidem voluptatem, ipsa quo reprehenderit pariatur praesentium saepe expedita commodi fugit quia in!</div>
           </section>
           <section class ="row">
                <div class = "col-6"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas assumenda vero temporibus veniam eius hic eum quos quidem voluptatem, ipsa quo reprehenderit pariatur praesentium saepe expedita commodi fugit quia in!</div>
                <div class = "col-6"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas assumenda vero temporibus veniam eius hic eum quos quidem voluptatem, ipsa quo reprehenderit pariatur praesentium saepe expedita commodi fugit quia in!</div>

           </section>
           <section class ="row">
                <div class = "col-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas assumenda vero temporibus veniam eius hic eum quos quidem voluptatem, ipsa quo reprehenderit pariatur praesentium saepe expedita commodi fugit quia in!</div>
                <div class = "col-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas assumenda vero temporibus veniam eius hic eum quos quidem voluptatem, ipsa quo reprehenderit pariatur praesentium saepe expedita commodi fugit quia in!</div>
                <div class = "col-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas assumenda vero temporibus veniam eius hic eum quos quidem voluptatem, ipsa quo reprehenderit pariatur praesentium saepe expedita commodi fugit quia in!</div>
                <div class = "col-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas assumenda vero temporibus veniam eius hic eum quos quidem voluptatem, ipsa quo reprehenderit pariatur praesentium saepe expedita commodi fugit quia in!</div>

            </section>
        
        </main>;`;
        return HTML;
    }
    footer() {
        const HTML = '<footer class ="container">&copy; Copyrigth</footer>';
        return HTML;
    }
    render() {
        const DOM = document.getElementById('app');
        const HTML = this.header() + this.main() + this.footer();

        DOM.insertAdjacentHTML('beforeend', HTML);
    }
}
