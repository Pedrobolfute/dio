void DiaComTresCondicoesSeparadas(){
    int atualHoras = 19;

    bool manhaHoras = atualHoras >= 1 && atualHoras <= 12;
    bool tardeHoras = atualHoras >= 13 && atualHoras <=18;
    bool noiteHoras = atualHoras >= 19 && atualHoras <= 24;

    if (manhaHoras){
        Console.WriteLine("É de manha ainda, pô!");
    }
    if(tardeHoras){
        Console.WriteLine("O que eu vou fazer??");
    }
    if(!noiteHoras){
        Console.WriteLine("Hora de dormi, vei!");
    }
    else{
        Console.WriteLine("Error, meu jovem!");
    }
}

void DiaAninhado(){
    int atualHoras = 13;

    bool manhaHoras = atualHoras >= 1 && atualHoras <= 12;
    bool tardeHoras = atualHoras >= 13 && atualHoras <=18;
    bool noiteHoras = atualHoras >= 19 && atualHoras <= 24;

    if(manhaHoras){
        Console.WriteLine("È de manha ainda.");
    }
    else if(tardeHoras){
        Console.WriteLine("É de tarde, vei.");
    }
    else if(noiteHoras){
        Console.WriteLine("To quase dormindo!");
    }
    else{
        Console.WriteLine("Erro, dinovo, poxa!");
    }
}

void ConhecidoComSwitch(){
    Console.WriteLine("Escreve um um nome simples: ");
    string? nomeGuardado = Console.ReadLine();
    string? nomeGuardadoConvertido = nomeGuardado?.ToLower();

    switch(nomeGuardadoConvertido){
        case "pedro":
        case "gabriel":
        case "valmira":
        case "jose":
        case "mayara":
        case "daniele":
        case "daniel":
        case "deivisson":
        case "yuri":
        case "murilo":
        case "diego":
        case "diegods":
        case "rafael":
        case "laiane":
        case "lethicia":
        case "karine":
        case "carol":
        case "nane":
        case "flavia":
        case "sister":
        case "hian":
        case "bolzani":
        case "mario":
        case "honoshow":
        case "...":
            Console.WriteLine($"{nomeGuardado}! Eu te conheço de algum lugar, man!");
            break;
        default:
            Console.WriteLine($"{nomeGuardado}?! Nunca nem vi!");
            break;

    }
    
}


Console.WriteLine("\n## if sem aninhação: ##");
DiaComTresCondicoesSeparadas();
Console.WriteLine("\n\n## if aninhado ##");
DiaAninhado();
Console.WriteLine("\n\n## switch case ##");
ConhecidoComSwitch();