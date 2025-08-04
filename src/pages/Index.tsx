import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent animate-float">
            Geo Project
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-scale-in"></div>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms]">
          Добро пожаловать в ваш географический проект! 
          Исследуйте мир с помощью современных технологий.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:400ms]">
          <Button 
            size="lg" 
            className="hover-scale hover-glow group relative overflow-hidden"
          >
            <span className="relative z-10">Начать исследование</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="hover-scale story-link"
          >
            Узнать больше
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto animate-fade-in [animation-delay:600ms]">
          <div className="p-6 rounded-lg border hover-scale hover-glow transition-all duration-300 group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:animate-float">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Карты</h3>
            <p className="text-muted-foreground">Интерактивные карты с подробной информацией</p>
          </div>
          
          <div className="p-6 rounded-lg border hover-scale hover-glow transition-all duration-300 group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:animate-float">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Геолокация</h3>
            <p className="text-muted-foreground">Точное определение местоположения</p>
          </div>
          
          <div className="p-6 rounded-lg border hover-scale hover-glow transition-all duration-300 group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:animate-float">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Аналитика</h3>
            <p className="text-muted-foreground">Подробная статистика и отчеты</p>
          </div>
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-glow"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-glow [animation-delay:1s]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-glow [animation-delay:2s]"></div>
      </div>
    </div>
  );
};

export default Index;
