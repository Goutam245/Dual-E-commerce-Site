import { motion } from "framer-motion";
import { Instagram, Heart } from "lucide-react";

const communityPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=300&fit=crop",
    username: "@cosmic_sarah",
    likes: 234,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop",
    username: "@lightworker_mike",
    likes: 189,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=300&h=300&fit=crop",
    username: "@luna_vibes",
    likes: 412,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300&h=300&fit=crop",
    username: "@zen_master_j",
    likes: 156,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=300&h=300&fit=crop",
    username: "@crystal_queen",
    likes: 298,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=300&h=300&fit=crop",
    username: "@spirit_guide",
    likes: 367,
  },
];

export const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold gradient-text mb-4">
            The LGHTNUP Fam 💫
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Share your journey. Inspire others. Rise together.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {communityPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
            >
              <img
                src={post.image}
                alt={`Post by ${post.username}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <p className="text-background text-sm font-medium">{post.username}</p>
                <div className="flex items-center gap-1 text-background/80 text-xs">
                  <Heart className="w-3 h-3" fill="currentColor" />
                  {post.likes}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-primary-foreground font-semibold rounded-full"
          >
            <Instagram className="w-5 h-5" />
            Join the Movement
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
