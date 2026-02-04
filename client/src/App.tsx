import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Divisions from "@/pages/Divisions";
import TechnologyGrowth from "@/pages/TechnologyGrowth";
import EventsTravel from "@/pages/EventsTravel";
import Beverage from "@/pages/Beverage";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/divisions" component={Divisions} />
      <Route path="/technology-growth" component={TechnologyGrowth} />
      <Route path="/events-travel" component={EventsTravel} />
      <Route path="/beverage" component={Beverage} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
