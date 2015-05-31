#[macro_use] extern crate nickel;
extern crate rustc_serialize as serialize;

use nickel::Nickel;
use nickel::HttpRouter;

use serialize::json::ToJson;

mod contact;
use contact::Contact;

fn main() {
    let mut server = Nickel::new();

    server.get("/", middleware!{
        "Index"
    });

    server.get("/contacts/:id", middleware!{
        Contact::new("Bodo", "i@bodokaiser.io").to_json()
    });

    server.listen("127.0.0.1:3000");
}
