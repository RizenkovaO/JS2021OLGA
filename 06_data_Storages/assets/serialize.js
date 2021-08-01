// Serialisation is the process of data structure translation of information into the formal that can be stored or transmitted
//  If we have a form on a website and we want to make a JSON call, we choose  a json format, then we need to gather all the information inside the js object, we need to translate it into JSON, and then it can be send to our backend.
//  or if you want to save some object inside a storage, we need to transform js into JSON then into string, and then save it in the local storage.
//  in some languages, like GoLang for ex. the process of Data Serialisation calls Marshalling.

// Data Formatting is hte process of organising the data according to preeset specification.
// Used for changing how the data is displayed.

// for not having any conflicts we are using a local storage here.
if ('localStorage' in window) {
    const person = {
        name: 'Arturs',
    };
    console.log(
        person,
        person.toString(),

    );
        // now we are serializing the data using this two methods:
        // deserialize:
        // JSON.parse
        // serialize
        // JSON.stringify
        const serializedData = JSON.stringify(person);
        // Serialized data before getting it into the storage:
        console.log(serializedData);

      // localStorage.setItem('me', serializedData);
      // then we got this data back:
      const fromLocalStorage = localStorage.getItem('me');
      console.log(
          fromLocalStorage,
          // logging back data that we receive and adding a :
          typeof fromLocalStorage
      );
      try {

      // currently we have a string in fromLocalStorage, so we are using JSON.parse method to desesialize:
          const deserializedData = JSON.parse(fromLocalStorage);
          console.log(deserializedData);
      } catch (err) {
          console.log(err);
      }
      //item that we deserialize doesn't have to be an object.

} else {
    console.log('Browser does not support localStorage');
}