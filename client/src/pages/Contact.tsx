import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useSEO } from "@/hooks/use-seo";
import { MapPin, Mail, Phone, Check, Loader2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  division: z.string().min(1, "Please select a division"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const divisions = [
  { value: "technology-growth", label: "Technology & Growth" },
  { value: "events-travel", label: "Events, Travel & Tourism" },
  { value: "beverage", label: "Execute Beverage" },
  { value: "general", label: "General Inquiry" },
];

export default function Contact() {
  useSEO({
    title: "Contact",
    description: "Get in touch with Execute Group. Whether you're building a business, planning travel, or seeking premium experiences—reach out and let's discuss how we can help.",
  });

  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      division: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <Layout>
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <AnimatedSection>
              <p className="text-[#8FAF9B] text-sm tracking-[0.2em] uppercase mb-6">
                Contact Us
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
                Let's Execute<br />Together.
              </h1>
              <p className="text-lg text-[#BDBDBD] leading-relaxed mb-12">
                Whether you're building a business, planning travel, or seeking
                premium experiences—reach out and let's discuss how we can help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#8FAF9B] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">Office</p>
                    <p className="text-[#BDBDBD] text-sm">
                      Office No: BC-889841<br />
                      26th Floor, Amber Gem Tower<br />
                      Sheikh Khalifa Street, Ajman, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#8FAF9B] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">Email</p>
                    <p className="text-[#BDBDBD] text-sm">
                      info@executegroup.ae
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#8FAF9B] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">Phone</p>
                    <p className="text-[#BDBDBD] text-sm">
                      +971 XX XXX XXXX
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 bg-[#141414] border border-white/5 rounded-md text-center"
                >
                  <div className="w-16 h-16 bg-[#8FAF9B]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Check className="w-8 h-8 text-[#8FAF9B]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Message Sent
                  </h3>
                  <p className="text-[#BDBDBD] mb-8">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/5"
                    data-testid="button-send-another"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <div className="p-8 lg:p-12 bg-[#141414] border border-white/5 rounded-md">
                  <h2 className="text-xl font-bold text-white mb-8">
                    Send a Message
                  </h2>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                className="bg-[#0F0F0F] border-white/10 text-white placeholder:text-[#BDBDBD]/50"
                                data-testid="input-name"
                                disabled={mutation.isPending}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                className="bg-[#0F0F0F] border-white/10 text-white placeholder:text-[#BDBDBD]/50"
                                data-testid="input-email"
                                disabled={mutation.isPending}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Company <span className="text-[#BDBDBD]/50">(Optional)</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your company"
                                className="bg-[#0F0F0F] border-white/10 text-white placeholder:text-[#BDBDBD]/50"
                                data-testid="input-company"
                                disabled={mutation.isPending}
                                {...field}
                                value={field.value ?? ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="division"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Division</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                              disabled={mutation.isPending}
                            >
                              <FormControl>
                                <SelectTrigger
                                  className="bg-[#0F0F0F] border-white/10 text-white"
                                  data-testid="select-division"
                                >
                                  <SelectValue placeholder="Select a division" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-[#141414] border-white/10">
                                {divisions.map((div) => (
                                  <SelectItem
                                    key={div.value}
                                    value={div.value}
                                    className="text-white hover:bg-white/5 focus:bg-white/5"
                                  >
                                    {div.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project or inquiry..."
                                className="bg-[#0F0F0F] border-white/10 text-white placeholder:text-[#BDBDBD]/50 min-h-[120px] resize-none"
                                data-testid="textarea-message"
                                disabled={mutation.isPending}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={mutation.isPending}
                        className="w-full bg-[#8FAF9B] text-[#0F0F0F] hover:bg-[#8FAF9B]/90 font-semibold disabled:opacity-70"
                        data-testid="button-submit-contact"
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
