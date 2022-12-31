interface Pingable {
    ping(): void
}

class Sonar implements Pingable {
    ping() {
        console.log("ping");
    }
}

class Ball implements Pingable {
    ping(): void {

    }

    pong() {
        console.log("pong");

    }
}


//  cautions 


interface Checkable {
    check(name: string): boolean
}

class NameChecker implements Checkable {
    check(s){
        return s.toLowerCase() === "ok"
    }

}

interface A {
    x:number;
    y?:number;
}

class C implements A {
    x = 0;
}
// y does not exit on type C;

const css = new C();
css.x




