use std::collections::BTreeMap;

use serialize::json::Json;
use serialize::json::ToJson;

pub struct Contact {
    name: String,
    email: String,
}

impl Contact {
    pub fn new(name: &str, email: &str) -> Contact {
        Contact{
            name: name.to_string(),
            email: email.to_string(),
        }
    }
}

impl ToJson for Contact {
    fn to_json(&self) -> Json {
        let mut map = BTreeMap::new();

        map.insert("name".to_string(), self.name.to_json());
        map.insert("email".to_string(), self.email.to_json());

        Json::Object(map)
    }
}
