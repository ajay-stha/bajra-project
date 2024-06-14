async function check() {
    var data = await fetch('https://httpstat.us/404');
    console.log(data);
    console.log('Test');
}
check();

const getFruit = async(name) => {
    const fruits = {
        pineapple: '🍍',
        grape: '🍇',
        lemon: '🍋'
    }
    //data = fruits[name]; this would return same emoji if returned in timeout
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(fruits[name]);
        }, 1000);
      });
}

getFruit('grape').then(console.log)

const smoothie = async(name) => {
    console.log(name, await getFruit(name));
}
smoothie('lemon')
smoothie('pineapple')

